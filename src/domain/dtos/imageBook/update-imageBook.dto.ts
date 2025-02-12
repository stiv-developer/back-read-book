

export class UpdateImageBookDto{

    private constructor(
        public readonly id: string,
        public readonly nameFile: string,
        public readonly routeFile: string,
        public readonly size: number,
        public readonly createDate?: string,
    ){}

    getValues(){
        const returnObj: { [key: string]: any} = {};

        if(this.nameFile) returnObj.nameFile = this.nameFile;
        if(this.routeFile) returnObj.routeFile = this.routeFile;
        if(this.size) returnObj.size = this.size;

        return returnObj;
    }

    static create(props: { [key: string]:any}): [string?, UpdateImageBookDto?]{
        const {id, nameFile,routeFile, size} = props;

        if (!id) {
            console.error('ID is required');
            return ['ID is required', undefined];
        }

        if (!nameFile && !routeFile && !size) {
            console.error('At least one field is required');
            return ['At least one field is required', undefined];
        }


        return [undefined, new UpdateImageBookDto(id,nameFile,routeFile, size)]
    }
}