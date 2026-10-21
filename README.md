# une seule fois : votre identité
git config --global user.name "Prénom Nom"
git clone https://github.com/pseudo/mon-depot.git
cd mon-depot
# modifiez README.md, puis :
git add README.md
git commit -m "Ajoute une présentation"
git push
