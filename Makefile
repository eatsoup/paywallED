build:
	web-ext build -o -n dewall.xpi -a /tmp/arts
	mv /tmp/arts/dewall.xpi .
	rm -rf /tmp/arts

