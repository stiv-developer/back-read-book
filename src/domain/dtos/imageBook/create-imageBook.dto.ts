
export class CreateImageBookDto {

    private constructor(
        public readonly nameFile: string,
        public readonly routeFile: string,
        public readonly size: number,
        public readonly createDate?: string,
    ){}

    static create(props: { [key: string]: any}): [string?, CreateImageBookDto?]{

        const {nameFile, routeFile, size} = props;

        if(!nameFile){
            return ['nameFile is required', undefined];
        }

        if(!routeFile){
            return ['routeFile is required', undefined];
        }

        if(!size){
            return ['size is required', undefined];
        }

        return [undefined, new CreateImageBookDto(nameFile, routeFile, size)];
    }
}