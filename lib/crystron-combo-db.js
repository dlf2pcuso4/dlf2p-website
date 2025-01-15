let jsonCrystronCombos = [
  {
    name: "Inclusion",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Smiger}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Sulfefnir] &lt;Thystvern&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Rosenix}
    [Effect(1) | Rosenix] &lt;Smiger&gt; {Citree}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]`,
    replay:
      "AOCCHAaCQghzRAkCAUEUFCKCiGAAggAEglAgAkQkIaCjAABDEhhAoJoME8AGgHCGCRJBKTCohpWQ0FAIFCSCkiBAUwY4gEE8GEMIhBEQNg==",
  },
  {
    name: "Smiger",
    text: `[Normal Summon | Smiger]
    [Special Summon | Clockwork Knight] &lt;Smiger&gt;
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Sulfador] {Tristaros, Cluster}
    [Effect(2) | Inclusion] &lt;Tristaros&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Thystvern}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Special Summon | Dawn Dragster] &lt;Sulfefnir, Tristaros&gt;
    [Effect(2) | Clockwork Knight] &lt;Tristaros&gt; {Thystvern}
    [Effect(2) | Thystvern] {Smiger}
    [Effect(1) | Sulfefnir] &lt;Smiger&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Rosenix}
    [Effect(1) | Rosenix] &lt;Clockwork Knight&gt; {Citree}
    [Set | Cluster]
    `,
    replay:
      "BgggwEAZAhYSMGEMHBBDgNBIQQ5ogSBAACKIhFDhDAAkglAgAkQkIaIiAABDEhhAoJoKE8AGgFGEAECEpDQU4gAI4FEMDBBBgCBQkApAgQFEsiIBBTEQNg==",
  },
  {
    name: "Speedroid Terrortop",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] &lt;Speedroid Terrortop, Speedroid Taketomborg&gt;
    [Effect(1) | Cherubini] &lt;Smiger, Cherubini&gt;
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Sulfador] {Thystvern, Cluster}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Rosenix] &lt;Cherubini&gt; {Citree}
    [Set | Cluster]    
    `,
    replay:
      "AGEEDAgCBBBAJAaBARIhcSMGCKDCGDgghwGgkIIc0QJAgChFEQigohgAIIABIJQIAJEJCGiIgAAQxIYQKCaEBPABoBwhgkSQSkwqIaVkNLoiAQUxEDY=",
  },
  {
    name: "Foolish Burial",
    text: `[Effect(1) | Foolish Burial] {Smiger}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Sulfador] {Thystvern, Cluster}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Rosenix] &lt;Rosenix&gt; {Citree}
    [Set | Cluster]    
    `,
    replay:
      "GhBDQNAwRQ1ogMIYOCCHAaCQghzRAkCAKEURCKCiGAAggAEglAgAkQkIaIiAABDEhhAoJoQE8AGgHCGCRJBKTCohpWQ0IOIBBPEQNg==",
  },
  {
    name: "Inclusion + Any Crystron",
    text: `[Effect(1) | Inclusion] {Sulfefnir}
    [Effect(1) | Sulfefnir] &lt;Any Crystron&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Thystvern}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Tristaros, Citree}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]    
    `,
    replay:
      "HBBCAghwGgoIIQAQKAgFIECQogwRQUIoKIYACCAASCUCACRCQhoKMAOaIEiODhDBQkApBxUQ8rIeACGJDCAATQIKIANIGEMIhBEQNg==",
  },
  {
    name: "Smiger + Any Crystron",
    text: `[Normal Summon | Smiger]
    [Special Summon | Clockwork Knight] &lt;Smiger&gt;
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Effect(2) | Sulfador] {Sulfefnir, Cluster}
    [Effect(1) | Sulfefnir] &lt;Any Crystron&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Tristaros}
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Rosenix] &lt;Clockwork Knight&gt; {Citree}
    [Set | Cluster]
    `,
    replay:
      "AwQQYIIMBAGQIWEjBhDBwQQ4DQSEEOaIEgQCgiiIRQYAgUJIKSIABTCUCACRCQhoiIAAEMSGECgmhATwAaAcIYJEkEpMKiGlZDSyIgEFMRA2",
  },
  {
    name: "Sulfador + Any Crystron monster",
    text: `[Normal Summon | Any Crystron]
    [Effect(1) | Sulfador] &lt;Any Crystron&gt;
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Thystvern] {Smiger}
    [Effect(1) | Sulfefnir] &lt;Smiger&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Tristaros}
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Special Summon | Dawn Dragster] &lt;Sulfefnir, Tristaros&gt;
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Rosenix] &lt;Inclusion&gt; {Citree}
    [Effect(2) | Inclusion] &lt;Tristaros&gt;
    [Set | Cluster]
    `,
    replay:
      "BIQQEIICBABQIEgQCgigoRQUQwMEEGAIFCSCkiAAUwlAgAkQkIaCjAABDEhhAoJoQE8AGgFGEAECEpDQYQwcEEOA0IhBDmiAQUQ4QwAJIRA2",
  },
  {
    name: "Sulfefnir + Any Crystron",
    text: `[Effect(1) | Sulfefnir] &lt;Any Crystron&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Tristaros, Smiger}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Smiger] &lt;Smiger&gt; {Citree}
    [Set | Cluster]
    `,
    replay:
      "FBBAQggIBAoCAUgQJCiHBFBQigohgAIIABIOEMFCOCUCACRCQhocMAAEMSGEAAmgwUQAaQcBoRCCHNECRKBR1CoipWRUGQIBBREQNg==",
  },
  {
    name: "Sulfefnir + Sulfador",
    text: `[Effect(1) | Sulfefnir] &lt;Sulfador&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Cluster}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Tristaros}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Tristaros, Thystvern}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(1) | Thystvern] &lt;Thystvern&gt; {Citree}
    [Set | Cluster]
    `,
    replay:
      "FBBCQghIBAoCAUgQJCiDBFEQigwhg4IIcBoACCHNECRGBKDCohpWQ0AAcHCGChIABxApAhIQ8REAACGJDiAATwUKIANIFQIBBREQNg==",
  },
  {
    name: "Smiger + Sulfador (Veiler safe)",
    text: `[Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Smiger}
    [Special Summon | Clockwork Knight] <Smiger>
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Prasiortle}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Cluster}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Cyber Dragon Nova] <Sulfefnir, Sulfador>
    [Special Summon | Cyber Dragon Infinity] <Cyber Dragon Nova>
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Clockwork Knight> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfefnir>
    [Special Summon | Eleskeletus] <Tristaros, Sulfefnir>
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(1) | Rosenix] <Eleskeletus> {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Smiger",
    text: `[Effect(1) | Sulfefnir] &lt;Smiger&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Thystvern, Cluster}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Tristaros, Thystvern}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(1) | Thystvern] &lt;Thystvern&gt; {Citree}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Smiger + Sulfador",
    text: `[Normal Summon | Smiger]
    [Effect(1) | Sulfador] &lt;Smiger&gt;
    [Effect(2) | Sulfador] {Sulfefnir, Tristaros}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Sulfefnir] &lt;Inclusion&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Tristaros}
    [Effect(2) | Inclusion] &lt;Tristaros&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Thystvern}
    [Effect(2) | Eleskeletus] {Sulfador}
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Thystvern] &lt;Thystvern&gt; {Citree}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt; {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Thystvern}
    [Effect(1) | Sulfador] &lt;Inclusion&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt;
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt;
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Tristaros, Citree}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador (Veiler safe)",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Thystvern}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Rosenix, Tristaros}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Cyber Dragon Nova] <Sulfador, Sulfefnir>
    [Special Summon | Cyber Dragon Infinity] <Cyber Dragon Nova>
    [Effect(2) | Rosenix] {Token}
    [Special Summon | Clockwork Knight] <Token>
    [Effect(2) | Clockwork Knight] <Tristaros> {Thystvern}
    [Effect(2) | Thystvern] {Sulfefnir}
    [Normal Summon | Sulfefnir] <Clockwork Knight>
    [Special Summon | Eleskeletus] <Sulfefnir, Tristaros>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] <Eleskeletus> {Prasiortle, Smiger}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(1) | Prasiortle] <Smiger> {Citree}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfador> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfador>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Smiger}
    [Effect(2) | Quandax] <Prasiortle>
    [Special Summon | Eleskeletus] <Tristaros, Smiger, Prasiortle>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Sulfefnir] <Thystvern> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Rosenix}
    [Effect(1) | Rosenix] <Eleskeletus> {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Smiger (Regulus ver.)",
    text: `[Normal Summon | Smiger]
    [Special Summon | Clockwork Knight] <Smiger>
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Thystvern] {Prasiortle}
    [Effect(1) | Sulfefnir] <Prasiortle> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(2) | Clockwork Knight] <Prasiortle> {Infinitrack River Stormer}
    [Effect(1) | Prasiortle] <Clockwork Knight> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfador>
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] <Eleskeletus> {Citree}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] <Quandax>
    `,
    replay: "",
  },
  {
    name: "Speedroid Terrortop (Regulus ver.)",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] <Speedroid Terrortop, Speedroid Taketomborg>
    [Effect(1) | Cherubini] <Smiger, Cherubini>
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfador> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Speedroid Terrortop>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfador>
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] <Eleskeletus> {Tristaros}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Sulfefnir] <Thystvern> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Citree}
    `,
    replay: "",
  },
  {
    name: "Foolish Burial (Regulus ver.)",
    text: `[Effect(1) | Foolish Burial] {Smiger}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfador> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfador>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfefnir>
    [Special Summon | Eleskeletus] <Tristaros, Sulfefnir>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] <Eleskeletus> {Tristaros}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Sulfefnir] <Thystvern> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Citree}
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Any Crystron (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] <Any Crystron> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(1) | Sulfador] <Quandax>
    [Effect(2) | Quandax] <Tristaros>
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] <Eleskeletus> {Tristaros, Smiger}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Smiger] <Inclusion> {Citree}
    [Special Summon | Dawn Dragster] <Smiger, Quandax>
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Sulfador + Any Crystron monster (Regulus ver.)",
    text: `[Effect(1) | Sulfador] <Any Crystron>
    [Effect(2) | Sulfador] {Sulfefnir, Smiger}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Prasiortle}
    [Effect(1) | Sulfefnir] <Prasiortle> {Inclusion}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(2) | Inclusion] <Prasiortle>
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfador>
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Smiger}
    [Effect(1) | Rosenix] <Eleskeletus> {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Sulfador (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Cluster}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Tristaros}
    [Effect(1) | Sulfador] <Inclusion>
    [Special Summon | Cyber Dragon Nova] <Sulfador, Sulfador>
    [Special Summon | Cyber Dragon Infinity] <Cyber Dragon Nova>
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Eleskeletus] <Sulfador, Tristaros>
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] <Eleskeletus> {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfefnir>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(1) | Rosenix] <Sulfefnir> {Tristaros}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Sulfador (Veiler safe) (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Smiger}
    [Effect(1) | Sulfador] <Smiger>
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Infinitrack River Stormer> {Tristaros}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(2) | Tristaros] <Quandax> {Tristaros, Rosenix}
    [Effect(2) | Quandax] <Sulfador>
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] <Eleskeletus> {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Thystvern}
    [Effect(1) | Sulfador] <Inclusion>
    [Special Summon | Cyber Dragon Nova] <Sulfador, Sulfador>
    [Special Summon | Cyber Dragon Infinity] <Cyber Dragon Nova>
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Eleskeletus] <Sulfefnir, Tristaros>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] <Eleskeletus> {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfefnir>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(1) | Rosenix] <Sulfefnir> {Tristaros}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador (Veiler safe) (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] <Sulfador> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Thystvern}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Rosenix, Tristaros}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Cyber Dragon Nova] <Sulfador, Sulfefnir>
    [Special Summon | Cyber Dragon Infinity] <Cyber Dragon Nova>
    [Effect(2) | Rosenix] {Token}
    [Special Summon | Clockwork Knight] <Token>
    [Effect(2) | Clockwork Knight] <Tristaros> {Thystvern}
    [Effect(2) | Thystvern] {Sulfefnir}
    [Normal Summon | Sulfefnir] <Clockwork Knight>
    [Special Summon | Eleskeletus] <Sulfefnir, Tristaros>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] <Eleskeletus> {Sulfefnir, Smiger}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfefnir>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(1) | Smiger] <Sulfefnir> {Tristaros}
    `,
    replay: "",
  },
  {
    name: "Inclusion OTK (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] <Inclusion>
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfefnir> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Sulfefnir>
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] <Sulfefnir> {Tristaros}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Special Summon | Eleskeletus] <Tristaros, Sulfefnir>
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Sulfefnir] <Thystvern> {Prasiortle}
    [Effect(2) | Tristaros] <Eleskeletus> {Tristaros, Tristaros}
    [Effect(2) | Eleskeletus] {Eleskeletus}
    [Special Summon | Quariongandrax] <Tristaros, Tristaros, Sulfefnir>
    (10900 damage)
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Any Crystron OTK (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] <Any Crystron> {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] <Sulfefnir>
    [Special Summon | Infinitrack River Stormer] <Sulfefnir, Sulfador>
    [Effect(1) | Infinitrack River Stormer] <Sulfador> {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] <Any Crystron>
    [Effect(1) | Sulfador] <Any Crystron>
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] <Tristaros, Sulfador>
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] <Eleskeletus> {Tristaros, Prasiortle}
    [Effect(2) | Eleskeletus] {Eleskeletus}
    [Special Summon | Quandax] <Prasiortle, Tristaros>
    [Effect(1) | Inclusion] {Smiger}
    [Effect(2) | Prasiortle] {Smiger}
    [Effect(1) | Smiger] <Inclusion> {Tristaros}
    [Special Summon | Quariongandrax] <Tristaros, Quandax, Smiger>
    (10900 damage)
    `,
    replay: "",
  },
];
