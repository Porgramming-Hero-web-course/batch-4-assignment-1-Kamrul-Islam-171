{
    //


    type Circle = {
        shape: string;
        radius: number;
    }

    type Rectangle = {
        shape: string;
        width: number;
        height: number
    }


    type Shape = Circle | Rectangle;

    const calculateShapeArea = (input: Shape): number => {
        if ("radius" in input) {
            return Math.PI * input.radius * input.radius;
        }
        if ("width" in input && "height" in input) {
            return input.height * input.width;
        }

        return 0;
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    console.log(circleArea);



    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(rectangleArea)


    //
}