var data = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`
var set = data.split("\n");
var sheet = [];

var cr = /\#(\d{1,1000}) \@ (\d{1,2000}),(\d{1,2000})\: (\d{1,2000})x(\d{1,2000})/;
var claimParser = c=>{
    var m = c.match(cr);
    return {
        id: Number(m[1]),
        left: Number(m[2]),
        top: Number(m[3]),
        width: Number(m[4]),
        height: Number(m[5])
    }
}

var parsedClaims = []
set.forEach(claim => {
    parsedClaims.push(claimParser(claim));
})

parsedClaims.forEach(claim=>{
    
    //count over each vertical inch
    for(v = 0; v < claim.top + claim.width; v++ ) {
           //count over each horizontal inch 
        for(h = 0; h < claim.left + claim.width; h++){
            if()
        }
    }

 
})