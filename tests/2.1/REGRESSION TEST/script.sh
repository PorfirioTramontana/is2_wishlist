echo "####### PROCESSO BASE #######"
cd ProcessoBase
for f in *.py; do
echo "####### $f ######"
python "$f" >> test_log.txt;
done
cd ..
echo "####### PROCESSO MIGLIORATO #######"
cd ProcessoMigliorato
for f in *.py; do
echo "####### $f ######"
python "$f" >> test_log.txt;
done

read -p "Press [Enter] key to exit..."