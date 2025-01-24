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
    text: `[Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Smiger}
    [Special Summon | Clockwork Knight] &lt;Smiger&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Prasiortle}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Cluster}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Clockwork Knight&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfefnir&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfefnir&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Citree}
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
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Thystvern}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Rosenix, Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfefnir&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(2) | Rosenix] {Token}
    [Special Summon | Clockwork Knight] &lt;Token&gt
    [Effect(2) | Clockwork Knight] &lt;Tristaros&gt {Thystvern}
    [Effect(2) | Thystvern] {Sulfefnir}
    [Normal Summon | Sulfefnir] &lt;Clockwork Knight&gt
    [Special Summon | Eleskeletus] &lt;Sulfefnir, Tristaros&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Prasiortle, Smiger}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(1) | Prasiortle] &lt;Smiger&gt {Citree}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfador&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Smiger}
    [Effect(2) | Quandax] &lt;Prasiortle&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Smiger, Prasiortle&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Sulfefnir] &lt;Thystvern&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Rosenix}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Smiger (Regulus ver.)",
    text: `[Normal Summon | Smiger]
    [Special Summon | Clockwork Knight] &lt;Smiger&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Thystvern] {Prasiortle}
    [Effect(1) | Sulfefnir] &lt;Prasiortle&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Clockwork Knight] &lt;Prasiortle&gt {Infinitrack River Stormer}
    [Effect(1) | Prasiortle] &lt;Clockwork Knight&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfador&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Citree}
    [Effect(2) | Eleskeletus] {Tristaros}
    [Effect(2) | Inclusion] &lt;Quandax&gt
    `,
    replay: "",
  },
  {
    name: "Speedroid Terrortop (Regulus ver.)",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] &lt;Speedroid Terrortop, Speedroid Taketomborg&gt
    [Effect(1) | Cherubini] &lt;Smiger, Cherubini&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Speedroid Terrortop&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfador&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Tristaros}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Sulfefnir] &lt;Thystvern&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Citree}
    `,
    replay: "",
  },
  {
    name: "Foolish Burial (Regulus ver.)",
    text: `[Effect(1) | Foolish Burial] {Smiger}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfador&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfefnir&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfefnir&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Tristaros}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Sulfefnir] &lt;Thystvern&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Citree}
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Any Crystron (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] &lt;Any Crystron&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(1) | Sulfador] &lt;Quandax&gt
    [Effect(2) | Quandax] &lt;Tristaros&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Smiger}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Smiger] &lt;Inclusion&gt {Citree}
    [Special Summon | Dawn Dragster] &lt;Smiger, Quandax&gt
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Sulfador + Any Crystron monster (Regulus ver.)",
    text: `[Effect(1) | Sulfador] &lt;Any Crystron&gt
    [Effect(2) | Sulfador] {Sulfefnir, Smiger}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Prasiortle}
    [Effect(1) | Sulfefnir] &lt;Prasiortle&gt {Inclusion}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Inclusion] &lt;Prasiortle&gt
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfador&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Smiger}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Sulfador (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Cluster}
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Tristaros}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfador&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Eleskeletus] &lt;Sulfador, Tristaros&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfefnir&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(1) | Rosenix] &lt;Sulfefnir&gt {Tristaros}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Sulfador (Veiler safe) (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Smiger}
    [Effect(1) | Sulfador] &lt;Smiger&gt
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(2) | Tristaros] &lt;Quandax&gt {Tristaros, Rosenix}
    [Effect(2) | Quandax] &lt;Sulfador&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Rosenix] &lt;Eleskeletus&gt {Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Smiger, Thystvern}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfador&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Eleskeletus] &lt;Sulfefnir, Tristaros&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfefnir&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(1) | Rosenix] &lt;Sulfefnir&gt {Tristaros}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]
    `,
    replay: "",
  },
  {
    name: "Inclusion + Sulfefnir/Sulfador (Veiler safe) (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfefnir/Sulfador}
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Thystvern}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Rosenix, Tristaros}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Cyber Dragon Nova] &lt;Sulfador, Sulfefnir&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(2) | Rosenix] {Token}
    [Special Summon | Clockwork Knight] &lt;Token&gt
    [Effect(2) | Clockwork Knight] &lt;Tristaros&gt {Thystvern}
    [Effect(2) | Thystvern] {Sulfefnir}
    [Normal Summon | Sulfefnir] &lt;Clockwork Knight&gt
    [Special Summon | Eleskeletus] &lt;Sulfefnir, Tristaros&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Smiger}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfefnir&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(1) | Smiger] &lt;Sulfefnir&gt {Tristaros}
    `,
    replay: "",
  },
  {
    name: "Inclusion + Smiger (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfador&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(1) | Sulfefnir] &lt;Smiger&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Rosenix}
    [Effect(1) | Rosenix] &lt;Quandax&gt {Tristaros}
    [Effect(2) | Quandax] &lt;Sulfefnir&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfefnir&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Citree}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(2) | Smiger] {Cluster}
    [Set | Cluster]    
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Smiger (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] &lt;Any Crystron&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(1) | Sulfador] &lt;Quandax&gt
    [Effect(2) | Quandax] &lt;Tristaros&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Smiger}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Inclusion] {Cluster}
    [Effect(1) | Smiger] &lt;Inclusion&gt {Citree}
    [Special Summon | Dawn Dragster] &lt;Smiger, Quandax&gt
    [Set | Cluster]    
    `,
    replay: "",
  },
  {
    name: "Sulfador + Smiger (Regulus ver.)",
    text: `[Normal Summon | Smiger]
    [Special Summon | Clockwork Knight] &lt;Smiger&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfefnir}
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Inclusion] &lt;Sulfador&gt
    [Effect(2) | Sulfador] {Tristaros, Cluster}
    [Effect(2) | Clockwork Knight] &lt;Tristaros&gt {Infinitrack River Stormer}
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfador}
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(1) | Rosenix] &lt;Clockwork Knight&gt {Citree}
    [Set | Cluster]    
    `,
    replay: "",
  },
  {
    name: "Speedroid Terrortop + Smiger/Sulfefnir (Regulus ver.)",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] &lt;Speedroid Terrortop, Speedroid Taketomborg&gt
    [Effect(1) | Cherubini] &lt;Thystvern, Cherubini&gt
    [Effect(2) | Thystvern] {Sulfefnir/Smiger}
    [Effect(1) | Sulfefnir] &lt;Smiger&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Cluster}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Infinitrack River Stormer&gt {Tristaros}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(1) | Sulfador] &lt;Quandax&gt
    [Effect(2) | Quandax] &lt;Tristaros&gt
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Rosenix}
    [Effect(2) | Eleskeletus] {Quandax}
    [Effect(1) | Rosenix] &lt;Inclusion&gt {Citree}
    [Set | Cluster]    
    `,
    replay: "",
  },
  {
    name: "Speedroid Terrortop + Sulfador (Regulus ver.)",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] &lt;Speedroid Terrortop, Speedroid Taketomborg&gt
    [Effect(1) | Cherubini] &lt;Smiger, Cherubini&gt
    [Effect(2) | Smiger] {Inclusion}
    [Effect(1) | Inclusion] {Sulfefnir}
    [Effect(1) | Sulfefnir] &lt;Sulfador&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Inclusion] &lt;Sulfador&gt
    [Effect(2) | Sulfador] {Thystvern, Cluster}
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfador}
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfador&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(1) | Rosenix] &lt;Infinitrack River Stormer&gt {Citree}
    [Set | Cluster]
    
    `,
    replay: "",
  },
  {
    name: "Speedroid Terrortop + Inclusion (Regulus ver.)",
    text: `[Special Summon | Speedroid Terrortop]
    [Effect(1) | Speedroid Terrortop] {Speedroid Taketomborg}
    [Special Summon | Speedroid Taketomborg]
    [Special Summon | Cherubini] &lt;Speedroid Terrortop, Speedroid Taketomborg&gt
    [Effect(1) | Cherubini] &lt;Thystvern, Cherubini&gt
    [Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Smiger}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Speedroid Terrortop&gt
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Effect(2) | Smiger] {Cluster}
    [Effect(1) | Sulfefnir] &lt;Cluster&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfefnir&gt
    [Effect(1) | Eleskeletus] {Cluster}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Sulfefnir, Rosenix}
    [Effect(2) | Eleskeletus] {Sulfefnir}
    [Special Summon | Cyber Dragon Nova] &lt;Sulfefnir, Sulfefnir&gt
    [Special Summon | Cyber Dragon Infinity] &lt;Cyber Dragon Nova&gt
    [Effect(1) | Rosenix] &lt;Infinitrack River Stormer&gt {Citree}
    [Set | Cluster]
    
    `,
    replay: "",
  },
  {
    name: "Inclusion OTK (Regulus ver.)",
    text: `[Effect(1) | Inclusion] {Sulfador}
    [Effect(1) | Sulfador] &lt;Inclusion&gt
    [Effect(2) | Sulfador] {Sulfefnir, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfefnir&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Sulfefnir&gt
    [Effect(2) | Thystvern] {Prasiortle}
    [Normal Summon | Prasiortle]
    [Effect(1) | Prasiortle] &lt;Sulfefnir&gt {Tristaros}
    [Effect(2) | Sulfefnir] {Sulfefnir}
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfefnir&gt
    [Effect(1) | Eleskeletus] {Thystvern}
    [Effect(1) | Sulfefnir] &lt;Thystvern&gt {Prasiortle}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Tristaros}
    [Effect(2) | Eleskeletus] {Eleskeletus}
    [Special Summon | Quariongandrax] &lt;Tristaros, Tristaros, Sulfefnir&gt
    (10900 damage)
    `,
    replay: "",
  },
  {
    name: "Sulfefnir + Any Crystron OTK (Regulus ver.)",
    text: `[Effect(1) | Sulfefnir] &lt;Any Crystron&gt {Sulfefnir}
    [Effect(2) | Sulfefnir] {Sulfador}
    [Effect(2) | Sulfador] {Inclusion, Thystvern}
    [Effect(2) | Inclusion] &lt;Sulfefnir&gt
    [Special Summon | Infinitrack River Stormer] &lt;Sulfefnir, Sulfador&gt
    [Effect(1) | Infinitrack River Stormer] &lt;Sulfador&gt {Therion "King" Regulus}
    [Effect(1) | Therion "King" Regulus] &lt;Any Crystron&gt
    [Effect(1) | Sulfador] &lt;Any Crystron&gt
    [Effect(2) | Thystvern] {Tristaros}
    [Normal Summon | Tristaros]
    [Special Summon | Eleskeletus] &lt;Tristaros, Sulfador&gt
    [Effect(1) | Eleskeletus] {Inclusion}
    [Effect(2) | Tristaros] &lt;Eleskeletus&gt {Tristaros, Prasiortle}
    [Effect(2) | Eleskeletus] {Eleskeletus}
    [Special Summon | Quandax] &lt;Prasiortle, Tristaros&gt
    [Effect(1) | Inclusion] {Smiger}
    [Effect(2) | Prasiortle] {Smiger}
    [Effect(1) | Smiger] &lt;Inclusion&gt {Tristaros}
    [Special Summon | Quariongandrax] &lt;Tristaros, Quandax, Smiger&gt
    (10900 damage)
    `,
    replay: "",
  },
];
