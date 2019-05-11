<?php 

$command = <<<EOT
	pwd
	git remote -v
	git pull origin master
EOT;

system($command);
