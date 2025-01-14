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
    [Effect(2) | Sulfefnir] {Prasiortle}
    [Effect(1) | Prasiortle] &lt;Smiger&gt; {Citree}
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
    [Effect(2) | Sulfefnir] {Prasiortle}
    [Effect(1) | Prasiortle] &lt;Clockwork Knight&gt; {Citree}
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
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Prasiortle}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Prasiortle] &lt;Cherubini&gt; {Citree}
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
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Prasiortle}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Prasiortle] &lt;Prasiortle&gt; {Citree}
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
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Prasiortle}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfador&gt;
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt;
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt;
    [Effect(1) | Prasiortle] &lt;Clockwork Knight&gt; {Citree}
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
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt; {Sulfefnir, Prasiortle}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Special Summon | Dawn Dragster] &lt;Sulfefnir, Tristaros&gt;
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Prasiortle] &lt;Inclusion&gt; {Citree}
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
];
