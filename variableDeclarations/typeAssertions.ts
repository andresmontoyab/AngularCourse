let message; // Al no inicializar como String nuestra variable esta quedará como un any y no podremos acceder directametne a los metodos
                // de la clase string, por ende debereos utilizar typeAssertions.
message = 'abc';
 
let endsWithcC = message.endsWith('c')
let assertionType = (<string>message).endsWith('c');
let alternativeWat = (message as string).endsWith('c');