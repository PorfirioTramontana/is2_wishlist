echo "####### PROCESSO BASE #######"
cd ProcessoBase
for f in *.py; do
    # restore database.json
    cat ../database_2.1.json > ../../../../client/mocks/database.json
    echo "####### $f ######"
    python "$f" >> ../log.txt;
done

cd ..
echo "####### PROCESSO MIGLIORATO #######"
cd ProcessoMigliorato
    for f in *.py; do
    # restore database.json
    cat ../database_2.1.json > ../../../../client/mocks/database.json
    echo "####### $f ######"
    python "$f" >> ../log.txt;
done

read -p "Press [Enter] key to exit..."