import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  translation: {
    header: "Choose a car out of your dreams!",
    selector: {
      loading: "Hold on... We're downloading the available options."
    },
    makes: {
      choose: "What car brand are you interested in?",
      loading: "Hold on... We're downloading the available car brands."
    },
    models: {
      choose: "What about the model? ",
      loading: "Hold on... We're downloading the available car models."
    },
    select: {
      empty: "Nothing available!"
    },
    selected: {
      title: "Nice! This is your choice."
    },
    list: {
      next: "Next",
      back: "Back"
    },
    vehicles: {
      available: "Available vehicles for the given mark and model",
      notAvailable:
        "We are sorry, but currently we do not offer any vehicles for given mark and model. Please come back soon.",
      make: "Make",
      model: "Model",
      engineCapacity: "Engine capacity",
      enginePowerPS: "Engine power (Housepower)",
      enginePowerKW: "Engine power(Kilowat hours)",
      fuelType: "Fuel type",
      bodyType: "Body type",
      select: "Select"
    },
    lang: {
      pl: "PL",
      en: "EN"
    },
    loading: "Loading...",
    networkError:
      "Oh, snap! A request has failed. Something wrong must be going on with our server. Please come back later."
  }
};

const pl = {
  translation: {
    header: "Wybierz swój samochód marzeń!",
    selector: {
      loading: "Sekundka... Pobieramy dostępne opcje."
    },
    makes: {
      choose: "Jaka marka Ciebie interesuje?",
      loading: "Sekundka... Pobieramy dostępne marki samochodów."
    },
    models: {
      choose: "A model?",
      loading: "Sekundka... Pobieramy dostępne modele samochodów."
    },
    select: {
      empty: "Takie rzeczy to nie u nas!"
    },
    list: {
      next: "Następne",
      back: "Poprzednie"
    },
    loading: "Ładowanie...",
    vehicles: {
      available: "Dostępne pojazdy dla danej marki i modelu samochodu",
      notAvailable:
        "Przepraszamy, ale aktualnie nie oferujemy żadnych pojazdów o wybranej marce i modelu. Wróć do nas niebawem!",
      make: "Marka",
      model: "Model",
      engineCapacity: "Pojemność silnika",
      enginePowerPS: "Moc silnika (Konie mechaniczne)",
      enginePowerKW: "Engine power(kWh)",
      fuelType: "Typ paliwa",
      bodyType: "Typ nadwozia",
      select: "Wybierz"
    },
    lang: {
      pl: "PL",
      en: "EN"
    },
    selected: {
      title: "Świetnie! Oto twój wybór."
    },
    networkError:
      "O nie! Coś się popsuło i nie mogliśmy pobrać danych z serwera. Wróć do nas wkrótce!"
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en,
    pl
  },
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});
