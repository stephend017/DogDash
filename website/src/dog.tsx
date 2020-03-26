export type Range =  {
    min: number;
    max: number;
}

export type Dog = {
    weight: Range;
    height: Range;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: Range;
    temperament: string;
    image_url: string;
    image_width: number;
    image_height: number;
}