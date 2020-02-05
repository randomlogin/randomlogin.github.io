#first jekyll build
bundle exec jekyll build
rm _site/build.sh
rm _site/myself
cp -a _site/. ../github-deploy/
#then add CNAME to /site 
#then git push /site
