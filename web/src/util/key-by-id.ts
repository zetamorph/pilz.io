export function keyById<T extends { [id: string]: string }>(data: Array<T>): { [id: string]: T } {
    return data.reduce((map, item) => map[item.id] = item, {});
}
