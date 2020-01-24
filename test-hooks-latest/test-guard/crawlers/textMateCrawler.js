const { counter } = require("./utils");
const { processFiles } = require('./textMateProcessor');
const grammars = require('../grammars');

async function testMain() {
    const grammar = await grammars.get('twig');
    const crawler = new TextMateCrawler('../../frontend-twig/config.html.twig', 'data-x-test-hook-', 'data-x-tpl-hook-', grammar);
    const i = await crawler.nextIndex();
    console.log('nextIndex', i);
    console.log('getTemplateHookMap', await crawler.getTemplateHookMap());
    //await crawler.removeHooks(new Set(['data-x-test-hook-9', 'data-x-test-hook-5']));
    await crawler.injectHooks();
}


class TextMateCrawler {

    constructor(globExpr, hookPrefix, templatePrefix, grammarName) {
        this.glob = globExpr;
        this.hookPrefix = hookPrefix;
        this.templatePrefix = templatePrefix;
        this.hookRegex = new RegExp("^" + hookPrefix + "(\\d+)$");
        this.templateRegex = new RegExp("^" + templatePrefix + "(\\d+)$");
        this.grammarName = grammarName;
    }

    async grammar() {
        return grammars.get(this.grammarName);
    }

    /*
     * Builds a map that contains a set of children test hooks for each template hook.
     * e.g.: { 'tpl-hook-1' => { hooks: { ... children hooks here ... }, fileName: "..." } }
     */
    async getTemplateHookMap() {
        const map = new Map();
        await processFiles(this.glob, await this.grammar(), (root, fileName) => this.buildTemplateHookMap(root.childNodes, fileName, map));
        return map;
    }

    async nextIndex() {
        const indexWrapper = { value: -1 };
        await processFiles(this.glob, await this.grammar(), (root) => this.findGreatestIndex(root.childNodes, indexWrapper));
        return indexWrapper.value + 1;
    }

    async injectHooks(counterValue = 0) {
        const nextIndex = counter(counterValue);
        await processFiles(this.glob, await this.grammar(), (root) => this.addTagAttributes(root.childNodes, nextIndex), true);
    }

    async removeHooks(whiteList = new Set()) {
        await processFiles(this.glob, await this.grammar(), (root) => this.removeTagAttributes(root.childNodes, whiteList), true);
    }

    findGreatestIndex(elements, indexWrapper) {
        for (let element of elements.filter(isTagOpen)) {
            Object.values(element.attributeNames).forEach(attributeName => {
                const match = attributeName.match(this.hookRegex);
                indexWrapper.value = match && parseInt(match[1], 10) > indexWrapper.value ? parseInt(match[1], 10) : indexWrapper.value;
            });
            this.findGreatestIndex(element.childNodes, indexWrapper);
        }
    }

    buildTemplateHookMap(elements, fileName, map, key = null) {
        let hook, hookSet, entry;
        for (let element of elements.filter(isTagOpen)) { // TODO: check case for multiple template roots in the same file
            key = key || Object.values(element.attributeNames).find(a => a.match(this.templateRegex));
            if (key) {
                entry = map.get(key);
                if (!entry) {
                    entry = { hooks: new Set(), fileName: fileName };
                    map.set(key, entry);
                }
                hookSet = entry.hooks;
                hook = Object.values(element.attributeNames).find(a => a.match(this.hookRegex));
                if (hook) {
                    hookSet.add(hook);
                }
                this.buildTemplateHookMap(element.childNodes, null, map, key);
            }
        }
    }

    addTagAttributes(elements, nextIndex, level = 0) {
        let attrName, prefix;
        for (let element of elements.filter(isTagOpen)) {
            // console.log(element.tagName);
            prefix = level === 0 ? this.templatePrefix : this.hookPrefix;

            attrName = Object.values(element.attributeNames).find(a => a.match(this.hookRegex) || a.match(this.templateRegex));
            if (!attrName) {
                element.addEmptyAttribute(prefix + nextIndex());
            }
            this.addTagAttributes(element.childNodes, nextIndex, level + 1);
        }
    }

    removeTagAttributes(elements, whiteList) {
        for (let element of elements.filter(isTagOpen)) {
            Object.values(element.attributeNames)
                .filter(a => a.match(this.hookRegex) || a.match(this.templateRegex))
                .forEach(attrName => {
                    if(!whiteList.has(attrName)) {
                        element.removeAttribute(attrName);
                    }
                });
            this.removeTagAttributes(element.childNodes, whiteList);
        }
    }


}

function isTagOpen(e) {
    return e.type === 'tag' && !e.end;
}


module.exports = TextMateCrawler;



//testMain().catch(console.error);
