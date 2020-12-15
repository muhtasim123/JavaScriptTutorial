let torf = (a) => {
    if(a) {
        console.log(`${a} is truthy`);
    } else {
        console.log(`${a} is falsey`);
    }
}

torf(0);
torf(1);
torf(false);
torf(true);
torf(null);
torf(undefined);
torf('');
torf([]);
torf({});
torf(torf);