export interface Catalogo {
  categoria: string
  prodotti: Array<Prodotto>
};


export interface Prodotto {
  id: number
  name: string
  prezzo: number
  descrizione: string
  taglia: string
  color: string
  marchio: string
  altreinfo: string
  img: string
};

