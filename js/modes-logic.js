document.addEventListener('DOMContentLoaded', () => {
    const modeSelect = document.getElementById('modes');
    const body = document.body;

    const setMode =(mode) => {
        body.classList.remove('light-mode', 'dark-mode', 'red-mode');
        if(mode === 'dark'){
            body.classList.add('dark-mode');
        } else if(mode === 'light'){
            body.classList.add('light-mode');
        }else if(mode === 'red'){
            body.classList.add('red-mode');
        }else if(mode === 'default'){
            applySystemMode();
        }
        localStorage.setItem('theme', mode);
        modeSelect.value=mode;
        }
        
    const applyMode = () => {
        const savedMode=localStorage.getItem('theme');
        
        if (savedMode) {
            setMode(savedMode);
        } else{
            applySystemMode();
        }
    };
     
    const applySystemMode = () => {
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setMode('dark');
        }else{
            setMode('light');
        }
    };
    applyMode();

    modeSelect.addEventListener('change', (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if(localStorage.getItem('theme') === 'default'){
                    applySystemMode();
                }
            });
    });
    
