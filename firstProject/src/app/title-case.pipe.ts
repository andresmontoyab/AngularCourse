import { Pipe, PipeTransform, } from '@angular/core';

@Pipe({
    name: 'newTitleCase'
})
export class PipeTitleCase implements PipeTransform {
    transform (value: string) {
        if (!value) return null;
        let eachWord = value.split(" ");
        let i = 0;
        for ( i; i<eachWord.length; i++) {
            let word = eachWord[i]
            if (i === 0) {
                eachWord[i]  = this.toTitleCase(word); 
            }
            else {
                if (this.isPreposition(word)) {
                        eachWord[i] = word.toLowerCase();
                } else {
                        eachWord[i] = this.toTitleCase(word); 
                }
            }
    }
    return eachWord.join(' ');
}

    private isPreposition (word: string) : boolean {        
        let prepositions = [
            'of',
            'the'
        ]
        return prepositions.includes(word.toLowerCase())
    }

    private toTitleCase (word:string) : string {
        return word.substr(0,1).toLocaleUpperCase() + word.substr(1).toLowerCase()
    }
}