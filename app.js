let pronoun = ['our', 'the', "you", "we"    ];

let adj = ['great', 'big', 'red', 'awesome','Beatiful'];

let noun = ["jogger", 'raccon','code', 'doctor', 'dog'];

let ext = ["com", 'net', 'io', 'us', 'ar', 'tk']

for (let i = 0; i < pronoun.length; i++) {
    let domainPronoun = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
        let domainAdj = domainPronoun + adj[j];
        for (let k = 0; k < noun.length; k++) {
            domainNoun = domainAdj + noun[k];
            for (let l = 0; l < ext.length; l++) {
                domainExt = domainNoun + "." + ext[l];
                console.log(domainExt)
            }
        }
    }
}