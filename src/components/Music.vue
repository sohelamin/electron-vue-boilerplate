<template>
    <h1>Music Player</h1>
    <button class="btn btn-default" v-on:click="fileOpen">
        <span class="icon icon-folder"></span>
    </button>
    <br />
    <audio controls id="player">
        <source v-for="file in files" src="{{ file }}" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</template>

<script>
    const remote = window.require('electron').remote;
    const dialog = remote.dialog;

    export default {
        data () {
            return {
                files: []
            }
        },
        methods: {
            fileOpen: function (event) {
                let tempPath = dialog.showOpenDialog({
                    properties: ['openFile', 'multiSelections']
                });

                this.files = tempPath;

                var audioElement = document.getElementById('player')
                audioElement.load();
                audioElement.play();
            }
        }
    }
</script>

<style>
    .music {

    }
</style>
