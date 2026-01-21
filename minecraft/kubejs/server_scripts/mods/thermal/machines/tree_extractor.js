ServerEvents.recipes(e => {
    e.remove({ type: 'thermal:tree_extractor' })
    
    // generate arboreal extractor fluid recipes from tree config
    for (let treeCategories of treeRegistry) {
        for (let tree of treeCategories.trees) {
            if (!tree.sap) { continue }
            if (!(tree.rate.living > 0)) { continue }
            e.custom({
                type: 'thermal:tree_extractor',
                trunk: {
                    Name: tree.trunk,
                    Properties: {
                        axis: "y"
                    }
                },
                leaves: {
                    Name: tree.leaf,
                    Properties: {
                        persistent: "false"
                    }
                },
                sapling: tree.sapling,
                min_height: 4,
                max_height: 24,
                min_leaves: 16,
                max_leaves: 100,
                result: {
                    fluid: tree.sap,
                    amount: tree.rate.living
                }
            }).id(`kubejs:thermal/machines/tree_extractor/${tree.sap.replace(':', '_')}_from_${tree.sapling.replace(':', '_').replace('_sapling', '')}`)
        }
    }
})
