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
      "AOCCHAaCwghzRAsCAYEUGCKDCGAQggIEgtAgCkQUIaDDAARDChhAwJoOE8BGgHCGCxJBaTBkho0Q0GAIGCSDEiBQUwc4gEE8HEMIhBEQNg==",
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
      "Bwgg4EAdAg4SMHEMHBBDgNBYQQ5ogWBABCKIhFDhDAIkgtAgCkQUIaIiAARDChhAwJoME8BGgGGEAUCCxDQY4gCI4GEMDhBBwCBgkAxAgUFEciIBBTEQNg==",
  },
];
