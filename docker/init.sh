sudo apt update
echo 'updating...'
sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
echo 'installing Docker...'
sudo apt install docker-ce -y
sudo systemctl status docker
sudo usermod -aG docker $USER
sudo rm docker.sh
