function startup() {
    $('.initialize').remove()
    $(document.querySelector('.aperture')).show()
    setTimeout(() => {
        const term = $('#terminal-area').terminal({
            cat: async function() {
                this.pause()
                response = await fetch("https://api.thecatapi.com/v1/images/search")
                cat = await response.json()
                console.log(cat)
                var img=new Image();
                    
                // console.log(responseData.imageData)
                img.src=cat[0].url;
                img.onload = () => { this.resume(); console.log('resumed') }
                img.classList.add("terminal-image")


                image = $(img)
                this.echo(image)
            },
            hello: function() {
                this.echo("Hello there! :)")
            }
        }, {
            checkArity: false,
            greetings: 'Aperture Sciences Terminal v0.0.1\n',
            completion: false,
            convertLinks:false,
            prompt:"$ "
        })
    }, 3000)        
}


$(document.querySelector('.aperture')).hide()

setTimeout(startup, Math.floor(Math.random() *2000) + 2000)

