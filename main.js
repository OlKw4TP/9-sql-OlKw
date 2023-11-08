const mysql = require('mysql')

let link = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'Student123!',
	database:'gGrades'
})

link.connect( function(err){
	if(!!err){
		console.log('Error')
	} else {
		console.log('Connect')
	}
})

function get(){
    link.query("SELECT `id`,`name`,`desc` FROM documents", (err,rows,flds)=>{
        if(!!err)
            console.log('ERROR!!!')
        else{
            console.log("Liczba wierszy: "+rows.length)
            console.log("Pole 'name': "+rows[0].name)
            console.log('---------------------')
            console.log(rows)
            return rows;
        }
    })
}

let res = get();

function put(){
    //let data = { id: 0, name:'jakis tytul', desc:'trelemorele.net'}
    let data = [[0, 'jakis tytul','trelemorele.net']];
    link.query("INSERT INTO documents (id,name,`desc`) VALUES ?", [data], (err,res)=>{
        console.log(err);
        console.log(res);
    })
}

put()
console.log('Query end')