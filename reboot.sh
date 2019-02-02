sudo docker build -t aviary.tech .
sudo docker kill $(sudo docker ps -q)
sudo docker run -d -p 80:80 aviary.tech
