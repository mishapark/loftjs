const path = "/users/download/index.html"

        function isHtml(path){
            var html = path.slice(-5)

            return html == '.html'
        }

        console.log(isHtml(path));