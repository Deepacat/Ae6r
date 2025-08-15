// custom event helpers for recipe types with no kube addon

const farmersDelightTools = {
    "axe": {
        "type": "farmersdelight:tool_action",
        "action": "axe_strip"
    },
    "pickaxe": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
    },
    "knife": {
        "tag": "forge:tools/knives"
    }
}

// embers melter helper
function embersMelting(e, output, input) {
    output = Fluid.of(output)
    input = input.includes('/') ? { tag: input } : { item: input }
    e.custom({
        type: "embers:melting",
        input: input,
        output: {
            amount: output.amount,
            fluid: output.id
        }
    }).id(`${prefix}embers/melting/${input.tag ? input.tag.split(':')[1] : input.item.split(':')[1]}`)
}

// embers stamp melter
function embersStamping(e, itemOutput, fluidInput, stamp) {
    itemOutput = Item.of(itemOutput)
    e.custom({
        type: "embers:stamping",
        fluid: fluidInput,
        output: itemOutput,
        stamp: {
            item: stamp
        }
    }).id(`${prefix}embers/stamping/${itemOutput.id.split(':')[1]}`)
}