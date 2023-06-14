const cat = document.getElementById('category');

cat.addEventListener('change', (event) => {
    //console.log(event.target.value);
    
    const clear = document.getElementById('sub-cat');
    console.log(clear);
   
    
    let element = document.getElementById("sub-cat");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    
    

    val = event.target.value;
    const sub_c = document.getElementById('sub-cat');
    //sub_c.removeChild(txt);
    if (val == '1') {
        const subarr = ["Character", "Enviroment", "Prop", "VFX"];
        const txt =  document.createElement('p');
        const sel = document.createElement('select');
        sel.setAttribute = "id";
        sel.id = "stage-cat";
        sel.classList.add(['form-select','mm-select-box']);
        //sel.classList.add("mm-select-box");
        txt.innerHTML = 'Select sub Category';

        for (let i=0; i<subarr.length;i++){
            let ele = subarr[i];
            const opt = document.createElement('option');
            opt.setAttribute = ("value");
            opt.value = ele;
            opt.textContent = ele;
            sel.appendChild(opt);
        }
        
        
        sub_c.appendChild(txt);
        sub_c.appendChild(sel);

        //costruzione SELECT Stage

        const stage_c = document.getElementById('stage-cat');
        const stage_div = document.getElementById('stage');
        stage_c.addEventListener('change', (event) => {
            console.log(stage_c);
            const lab = document.createElement('p');
            const stage_sel = document.createElement('select');

            stage_sel.classList.add("form-select");
            stage_sel.classList.add("mm-select-box");
            lab.innerHTML = 'Select stage';

            for (let z=0; z<stagearr.length; z++){
                let sta_ele = stagearr[z];
                const stage_opt = document.createElement('option');

                stage_opt.setAttribute = ("value");
                stage_opt.value = sta_ele;
                stage_opt.textContent = sta_ele;
                stage_sel.appendChild(stage_opt);
            }



            stage_div.appendChild(lab);
            stage_div.appendChild(stage_sel);
        });


        

    }

    if (val == '2') {
        const subarr = ["Character", "Enviroment", "Prop", "VFX"]
        const stagearr = ["Design", "Turn Around", "Expression", "Render"]

        //costruzione SELECT Sub Category
        const txt =  document.createElement('p');
        const sel = document.createElement('select');
        sel.setAttribute = "id";
        sel.id = "stage-cat";
        sel.classList.add("form-select");
        sel.classList.add("mm-select-box");
        txt.innerHTML = 'Select sub Category';

        for (let i=0; i<subarr.length;i++){
            let ele = subarr[i];
            const opt = document.createElement('option');
            opt.setAttribute = ("value");
            opt.value = ele;
            opt.textContent = ele;
            sel.appendChild(opt);
        }
        sub_c.appendChild(txt);
        sub_c.appendChild(sel);

        //costruzione SELECT Stage

        const stage_c = document.getElementById('stage-cat');
        const stage_div = document.getElementById('stage');
        stage_c.addEventListener('change', (event) => {
            console.log(stage_c);
            const lab = document.createElement('p');
            const stage_sel = document.createElement('select');

            stage_sel.classList.add("form-select");
            stage_sel.classList.add("mm-select-box");
            lab.innerHTML = 'Select stage';

            for (let z=0; z<stagearr.length; z++){
                let sta_ele = stagearr[z];
                const stage_opt = document.createElement('option');

                stage_opt.setAttribute = ("value");
                stage_opt.value = sta_ele;
                stage_opt.textContent = sta_ele;
                stage_sel.appendChild(stage_opt);
            }



            stage_div.appendChild(lab);
            stage_div.appendChild(stage_sel);
        });
        

        

    }
    
});

