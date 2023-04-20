class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <LogoWrapperSmallScreen
            currentlySelectedPokemonName={currentlySelectedPokemonName}
          />
          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <div className="row align-items-center">
              <PokemonSelector />
            </div>
          </div>
          <LogoWrapperLargeScreen
            currentlySelectedPokemonName={currentlySelectedPokemonName}
          />
          <EggGroupWrapper
            eggGroups={eggGroups}
            currentlySelectedPokemonName={currentlySelectedPokemonName}
            cleanPokemonName={this.cleanPokemonName}
          />
        </div>
      </div>
    );
  }

  // called in onSelectPokemon
  setPokemonPictureUrl = (baseUrl) => {
    const newUrl = baseUrl.replace("-species", "");
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => data.sprites.other["official-artwork"].front_default)
      .then((picUrl) =>
        this.setState({ currentlySelectedPokemonPictureUrl: picUrl })
      );
  };

  // called in onSelectPokemon
  setEggGroupsAndPokemonName = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          currentlySelectedPokemonName: this.cleanPokemonName(data.name),
        });
        // ditto is a unique pokemon, so the data has to be slightly altered if ditto is selected
        if (data.name === "ditto") {
          this.setState({
            eggGroups: [
              {
                name: "no-eggs",
                url: "https://pokeapi.co/api/v2/egg-group/no-eggs",
              },
            ],
          });
        } else {
          this.setState({ eggGroups: data.egg_groups });
        }
      });
  };
}
