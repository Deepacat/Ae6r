// priority: 10001

const aspecti = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']
const aspectusShards = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard`))
const aspectusShardBlocks = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard_block`))