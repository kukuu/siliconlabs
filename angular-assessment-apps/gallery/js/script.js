(function() {

    var Gallery = {

        currentPos: 1,
        amountImages: 0,

        init: function() {

            //load JSON file with the images
            Gallery.loadJSON( Gallery.parseImagesJson );
            
            //click event for navigation buttons
            document.getElementById('navRight').addEventListener('click', function(e) {
                Gallery.navigateImage(e, 1);
            });
            document.getElementById('navLeft').addEventListener('click', function(e) {
                Gallery.navigateImage(e, -1);
            });

        },

        loadJSON: function(callback) {   

            var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");

            xobj.open('GET', 'images.json', true);

            xobj.onreadystatechange = function () {
                if (xobj.readyState == 3 && xobj.status == "200") {
                    callback(xobj.responseText);
                }
            };

            xobj.send(null);  

         },

        parseImagesJson: function(json) {

            json = JSON.parse(json)[0].images;

            Gallery.amountImages = json.length;

            if(Gallery.amountImages > 0) {

                //create large image
                var lgImage = document.createElement('img');
                lgImage.setAttribute('id', "largeImg");
                lgImage.setAttribute('src', json[0].large);
                lgImage.setAttribute('alt', "Large Image");

                //adding large image to DOM
                document.getElementById('largeImgContainer').appendChild(lgImage);

                //loop through images and display as thumbnail
                for(var i = 0; i < Gallery.amountImages; i++) {

                    (function () {
                        var index = i + 1;
                        //thumbnail link
                        var thumbLink = document.createElement('a');
                        thumbLink.setAttribute('href', json[i].large);
                        thumbLink.setAttribute('title', json[i].title);
                        thumbLink.setAttribute('class', "thumb-link");
                        thumbLink.addEventListener('click', function(e) {
                            Gallery.changeImage(e, index, false);
                        });

                        //thumbnail image
                        var thumb = document.createElement('img');
                        thumb.setAttribute('src', json[i].thumb);
                        thumb.setAttribute('alt', "Thumb image " + i);
                        if(i == 0) //set 'active' class on first thumb
                            thumb.setAttribute('class', "active");

                        thumbLink.appendChild( thumb );

                        //add thumbnail to DOM
                        document.getElementsByClassName('thumbs')[0].appendChild( thumbLink );

                        //preload large images
                        var preloadImg = document.createElement('img');
                        preloadImg.setAttribute('src', json[i].large);
                    }());

                }

            }
                
        },

        navigateImage: function(event, nav) {

            event.preventDefault();

            //calculate new index position
            Gallery.currentPos += nav;

            //make sure the position stays between 1 and 'amountImages'
            if(Gallery.currentPos > Gallery.amountImages)
                Gallery.currentPos = 1;
            else if(Gallery.currentPos == 0)
                Gallery.currentPos = Gallery.amountImages;

            //fire click event for displaying the thumb as large image
            var target = document.getElementsByClassName('thumb-link')[Gallery.currentPos-1];
            Gallery.changeImage(event, Gallery.currentPos, true, target);

        },

        changeImage: function(event, index, navigating, elem) {

            event.preventDefault();

            if(!navigating) {
                //update current position
                Gallery.currentPos = index;

                var target = event.target;
            } else {
                var target = elem.childNodes[0];                
            }

            var parent = target.parentNode;
            console.log(parent);

            //get the link's url and place as img's src
            document.getElementById('largeImg').setAttribute('src', parent.href);

            //remove 'active' class from old thumb and add to the new current one
            var children = parent.parentNode.childNodes;
            for(var i = 0; i < children.length; i++) {
                children[i].childNodes[0].setAttribute('class', '');
            }
            target.setAttribute('class', 'active');

        }

    };

    Gallery.init();

})();