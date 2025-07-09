Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  }

  // Fetch the necessary data
  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier)
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier)

  const response = await sdk.network.fetch("https://vpo9ry8wfrqpgwt9u5f3o1k8mzsygs4h.ctl.sk")
}
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {

  // Create a static file and return it
  return [
    FileHelper.createTextFile({
      relativePath: "./",
      fileName: "colors.css",
      content: ":root {}",
    }),
  ]
})
