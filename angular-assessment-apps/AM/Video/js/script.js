(function() {

    var Video = {

        player: null,
        playButton: null,
        muteButton: null,
        fullScreenButton: null,
        seekBar: null,
        volumeBar: null,
        playerControls: null,

        init: function() {

            //change controls event listener
            $('#controls input:radio').change( Video.changeControls );

            //video
            Video.player = $("#video");

            //video controls container
            Video.playerControls = $("#video-controls");

            //buttons
            Video.playButton = $("#play-pause");
            Video.muteButton = $("#mute");
            Video.fullScreenButton = $("#full-screen");

            //sliders
            Video.seekBar = $("#seek-bar");
            Video.volumeBar = $("#volume-bar");


            //event listener for the play & pause button
            $(Video.playButton).click(Video.playPauseVideo);

            //event listener for mute button
            $(Video.muteButton).click(Video.muteVideo);

            //event listener for fullscreen button
            $(Video.fullScreenButton).click(Video.fullScreen);

            //event listener for seek bar
            $(Video.seekBar).change(Video.seek);
            //update the seek bar while the video is playing
            $(Video.player).bind('timeupdate', Video.updateSeekBar);

            //event listener for volume bar
            $(Video.volumeBar).change(Video.changeVolume);

            //event listener for ESC key when in fullscreen mode
            $(document).keyup(function(e) {
                if (e.keyCode == 27) { $('#full-screen').click(); }   // esc
            });

        },

        changeControls: function() {

            if(this.value == "native") {

                $('#video').attr('controls', '');
                $(Video.playerControls).hide();

            } else if (this.value == "custom") {

                $('#video').removeAttr('controls');
                $(Video.playerControls).show();

                //update controls in case the video state has been changed with native control 
                Video.updateCustomControls();

            }

        },

        playPauseVideo: function() {

            if($(Video.player)[0].paused) {
                // Play the video
                $(Video.player)[0].play();
            } else {
                // Pause the video
                $(Video.player)[0].pause();
            }

            Video.updateCustomControls();

        },

        muteVideo: function() {

            if($(Video.player)[0].muted) {
                //unmute the video
                $(Video.player)[0].muted = false;
            } else {
                //mute the video
                $(Video.player)[0].muted = true;
            }

            Video.updateCustomControls();

        },

        fullScreen: function() {

            if(!$(Video.playerControls).hasClass('full-screen')) {

                if ($(Video.player)[0].requestFullscreen) {
                    $(Video.player)[0].requestFullscreen();
                } else if ($(Video.player)[0].mozRequestFullScreen) {
                    $(Video.player)[0].mozRequestFullScreen(); // Firefox
                } else if ($(Video.player)[0].webkitRequestFullscreen) {
                    $(Video.player)[0].webkitRequestFullscreen(); // Chrome and Safari
                }

                $(Video.playerControls).addClass('full-screen');
                $(Video.player).addClass('full-screen');

            } else {

                if(document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }

                $(Video.playerControls).removeClass('full-screen');
                $(Video.player).removeClass('full-screen');

            }

        },

        seek: function() {

            //calculate the new time
            var time = $(Video.player)[0].duration * ($(Video.seekBar)[0].value / 100);

            //update the video time
            $(Video.player)[0].currentTime = time;

        },

        updateCustomControls: function() {

            Video.buttonPlayPauseText();
            Video.buttonMuteText();

            //update seek bar
            $(Video.seekBar)[0].value = $(Video.player)[0].currentTime * (100 / $(Video.player)[0].duration);
           
            //update volume
            $(Video.volumeBar)[0].value = $(Video.player)[0].volume;

        },

        updateSeekBar: function() {

            //calculate the slider value
            var val = (100 / $(Video.player)[0].duration) * $(Video.player)[0].currentTime;

            //update the slider position
            $(Video.seekBar)[0].value = val;

        },

        changeVolume: function() {

            //update the video volume
            $(Video.player)[0].volume = $(Video.volumeBar)[0].value;

        },

        buttonPlayPauseText: function() {

            //update the pause/play button class
            if($(Video.player)[0].paused) {
                $(Video.playButton).removeClass('playing');
            } else {
                $(Video.playButton).addClass('playing');
            }

        },

        buttonMuteText: function() {

            //update the mute button class
            if($(Video.player)[0].muted) {
                $(Video.muteButton).addClass('muted');
            } else {
                $(Video.muteButton).removeClass('muted');
            }

        }

    };

    Video.init();

})();