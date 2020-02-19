for f in *.py; do
echo "####### $f ######"
python "$f" >> test_log.txt;
done
read -p "Press [Enter] key to exit..."