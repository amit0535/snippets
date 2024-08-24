adduser amit
usermod -aG sudo amit
ufw allow OpenSSH
ufw enable
#$USER ALL=(ALL) NOPASSWD: ALL
#mkdir  /home/amit/.ssh/ &&  cp /root/.ssh/authorized_keys /home/amit/.ssh/ && chown -R amit:amit /home/amit
