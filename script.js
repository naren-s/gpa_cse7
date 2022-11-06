function show_result(){
    let e1 = document.getElementById("sub1");
    let e2 = document.getElementById("sub2");
    let e3 = document.getElementById("sub3");
    let e4 = document.getElementById("sub4");
    let e5 = document.getElementById("sub5");
    let e6 = document.getElementById("sub6");
    let e7 = document.getElementById("sub7");
    let e8 = document.getElementById("sub8");

    if(e1.value == "" || e2.value == "" || e3.value == "" || e4.value == "" || e5.value == "" || e6.value == "" || e7.value == "" || e8.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select an option!'
          })
        return false;
    }else{

        Swal.fire({
            icon: 'success',
            title: 'Your GPA has been found',
            showConfirmButton: false,
            timer: 1500
          })

    let cns = e1.options[e1.selectedIndex].text;
    let cc = e2.options[e2.selectedIndex].text;
    let pom = e3.options[e3.selectedIndex].text;
    let spm = e4.options[e4.selectedIndex].text;
    let scm = e5.options[e5.selectedIndex].text;
    let hci = e6.options[e6.selectedIndex].text;
    let cnslb = e7.options[e7.selectedIndex].text;
    let cclb = e8.options[e8.selectedIndex].text;

    let m1 = 0;
    let m2 = 0;
    let m3 = 0;
    let m4 = 0;
    let m5 = 0;
    let m6 = 0;
    let m7 = 0;
    let m8 = 0;

    if(cns == "O" || cns == "o"){
        m1 = 10 * 3;
    }
    if(cns == "A+" || cns == "a+"){
        m1 = 9 * 3;
    }
    if(cns == "A" || cns == "a"){
        m1 = 8 * 3;
    }
    if(cns == "B+" || cns == "b+"){
        m1 = 7 * 3;
    }
    if(cns == "B" || cns == "b"){
        m1 = 6 * 3;
    }

    if(cc == "O" || cc == "o"){
        m2 = 10 * 3;
    }
    if(cc == "A+" || cc == "a+"){
        m2 = 9 * 3;
    }
    if(cc == "A" || cc == "a"){
        m2 = 8 * 3;
    }
    if(cc == "B+" || cc == "b+"){
        m2 = 7 * 3;
    }
    if(cc == "B" || cc == "b"){
        m2 = 6 * 3;
    }

    if(pom == "O" || pom == "o"){
        m3 = 10 * 3;
    }
    if(pom == "A+" || pom == "a+"){
        m3 = 9 * 3;
    }
    if(pom == "A" || pom == "a"){
        m3 = 8 * 3;
    }
    if(pom == "B+" || pom == "b+"){
        m3 = 7 * 3;
    }
    if(pom == "B" || pom == "b"){
        m3 = 6 * 3;
    }

    if(scm == "O" || scm == "o"){
        m4 = 10 * 3;
    }
    if(scm == "A+" || scm == "a+"){
        m4 = 9 * 3;
    }
    if(scm == "A" || scm == "a"){
        m4 = 8 * 3;
    }
    if(scm == "B+" || scm == "b+"){
        m4 = 7 * 3;
    }
    if(scm == "B" || scm == "b"){
        m4 = 6 * 3;
    }

    if(spm == "O" || spm == "o"){
        m5 = 10 * 3;
    }
    if(spm == "A+" || spm == "a+"){
        m5 = 9 * 3;
    }
    if(spm == "A" || spm == "a"){
        m5 = 8 * 3;
    }
    if(spm == "B+" || spm == "b+"){
        m5 = 7 * 3;
    }
    if(spm == "B" || spm == "b"){
        m5 = 6 * 3;
    }

    if(hci == "O" || hci == "o"){
        m6 = 10 * 3;
    }
    if(hci == "A+" || hci == "a+"){
        m6 = 9 * 3;
    }
    if(hci == "A" || hci == "a"){
        m6 = 8 * 3;
    }
    if(hci == "B+" || hci == "b+"){
        m6 = 7 * 3;
    }
    if(hci == "B" || hci == "b"){
        m6 = 6 * 3;
    }

    if(cnslb == "O" || cnslb == "o"){
        m7 = 10 * 2;
    }
    if(cnslb == "A+" || cnslb == "a+"){
        m7 = 9 * 2;
    }
    if(cnslb == "A" || cnslb == "a"){
        m7 = 8 * 2;
    }
    if(cnslb == "B+" || cnslb == "b+"){
        m7 = 7 * 2;
    }
    if(cnslb == "B" || cnslb == "b"){
        m7 = 6 * 2;
    }

    if(cclb == "O" || cclb == "o"){
        m8 = 10 * 2;
    }
    if(cclb == "A+" || cclb == "a+"){
        m8 = 9 * 2;
    }
    if(cclb == "A" || cclb == "a"){
        m8 = 8 * 2;
    }
    if(cclb == "B+" || cclb == "b+"){
        m8 = 7 * 2;
    }
    if(cclb == "B" || cclb == "b"){
        m8 = 6 * 2;
    }

    let gpaval = (m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8) / 22;
    const style = document.createElement('style');
    style.innerHTML = '.gra{font-weight: 600; color: #34495e; background: #fff; padding: 4px 24px; font-size: 30px}';
    document.body.appendChild(style);
    document.querySelector(".gra").innerHTML =  gpaval.toFixed(2);
    return true;
    }
}