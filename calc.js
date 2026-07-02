   function add() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*'|| b == '%'|| b == '.') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '+'
            } else {
                f.d.value += '+'
            }
        }
        function dot() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*'|| b == '%'|| b == '.') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '.'
            } else {
                f.d.value += '.'
            }
        }
        function mod() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*'|| b == '%'|| b == '.') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '%'
            } else {
                f.d.value += '%'
            }
        }
        function sub() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '-'
            } else {
                f.d.value += '-'
            }
        }
        function div() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '/'
            } else {
                f.d.value += '/'
            }
        }
        function mul() {
            let act = 0, b = 0
            act = f.d.value
            b = act.charAt(act.length - 1)
            if (b == '+' || b == '-' || b == '/' || b == '*') {
                f.d.value = act.substring(0, act.length - 1)
                f.d.value += '*'
            } else {
                f.d.value += '*'
            }
        }
        function del(){
            let del = f.d.value
            del = del.slice(0, -1);
            f.d.value = del
        }