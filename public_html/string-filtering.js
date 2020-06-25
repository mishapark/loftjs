const str = "Привет! Как дела?";
        let result = '';
        const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е']
            for (var i = 0; i < str.length; i++) {
                str.toLowerCase()
                if (vowels.includes(str[i])) {
                    result = result + str[i]
                }
            }
        console.log(result);