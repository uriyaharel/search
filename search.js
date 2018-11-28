var path = require('path'), fs=require('fs');
var counter = 0;

function searching(startPath){
 
//console.log(startPath);
var filter = process.argv[2];
//console.log(filter);
var contain = process.argv[3];
//console.log(contain);
   
	if(process.argv[2] === undefined){
	console.log("USAGE: node search [EXT] [TEXT]");
	 return;
	} 

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
		console.log(startPath+'--:'+files[i]);
        var stat = fs.lstatSync(filename);
		
        if (stat.isDirectory()){
            searching(filename,filter); //recurse
        }
		
        else if (filename.substr( filename.lastIndexOf(".") + 1 ) == filter  ) {
		
	
		
	 var contents = fs.readFileSync(filename, 'utf8');
	 
	 if(contents.includes(contain)) {
		 counter++;
		console.log('--:'+filename);
	 } 
		
        };
    };
	
};

searching(__dirname);

		if(counter===0){
		console.log('NO file was found ');
		
		}
