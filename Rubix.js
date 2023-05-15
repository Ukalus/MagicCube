export function createRubixCube(dimensions){
    let rubixCube = [];
    for(let x = 0; x < dimensions; x++){
        for(let y = 0; y < dimensions; y++){
            for(let z = 0; z < dimensions; z++){
                rubixCube.push(new Cubie(0xffffff,[x,y,z]))
            }
        }
    }
    return rubixCube
}

class Cubie{
    constructor(newColor, newPosition){
        this.color = newColor;
        this.position = newPosition;
    }


}
