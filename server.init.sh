adduser amit
usermod -aG sudo amit
ufw allow OpenSSH
ufw enable
#$USER ALL=(ALL) NOPASSWD: ALL
