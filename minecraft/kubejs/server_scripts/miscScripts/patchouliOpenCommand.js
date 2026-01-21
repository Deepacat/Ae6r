// patchouli command requires OP normally, but this bypasses that
// from kubejs server
// https://discord.com/channels/303440391124942858/1172464187486785567/
// used to open pages from questbook

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;
	let command = "open-book"
	event.register(Commands.literal(command)
		.then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(event))
			.executes(ctx => {
				const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
				const username = ctx.source.entity.username;
				let cmd = `open-patchouli-book ${username} ${book}`
				Utils.server.runCommandSilent(cmd);
				return 1
			})
		)
	)
	event.register(Commands.literal(command)
		.then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(event))
			.then(Commands.argument('entry', Arguments.RESOURCE_LOCATION.create(event))
				.executes(ctx => {
					const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
					const entry = Arguments.RESOURCE_LOCATION.getResult(ctx, "entry")
					const username = ctx.source.entity.username;
					let cmd = `open-patchouli-book ${username} ${book} ${entry}`
					Utils.server.runCommandSilent(cmd);
					return 1
				})
			)
		))
	event.register(Commands.literal(command)
		.then(Commands.argument('book', Arguments.RESOURCE_LOCATION.create(event))
			.then(Commands.argument('entry', Arguments.RESOURCE_LOCATION.create(event))
				.then(Commands.argument('page', Arguments.INTEGER.create(event))
					.executes(ctx => {
						const book = Arguments.RESOURCE_LOCATION.getResult(ctx, "book")
						const entry = Arguments.RESOURCE_LOCATION.getResult(ctx, "entry")
						const page = Arguments.INTEGER.getResult(ctx, "page")
						const username = ctx.source.entity.username;
						let cmd = `open-patchouli-book ${username} ${book} ${entry} ${page}`
						Utils.server.runCommandSilent(cmd);
						return 1
					})
				)
			)))
})