/**
 * Takes an object and turns it into a valid key-value block.
 * @param keyword The keyword for the block.
 * @param name The name of the block.
 * @param entries An object containing the entries.
 * @returns The key-value block string.
 */
export declare const parseKeyValueBlock: (keyword: string, name: string, entries: [string, string | string[] | {
    env: string;
}][]) => string;
