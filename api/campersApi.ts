import { API } from "./api";

type Amenities =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export type Forms = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type Engines = "diesel" | "petrol" | "hybrid" | "electric";
export type Transmissions = "automatic" | "manual";

export interface CamperGallery {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description?: string;
  form: Forms;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmissions;
  engine: Engines;
  amenities: Amenities[];
  createdAt?: string;
  updatedAt?: string;
  coverImage: string;
  totalReviews: number;
  gallery?: CamperGallery[];
}
export interface GetCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface BookingPostData {
  name: string;
  email: string;
}

export interface FiltersParams {
  location?: string;
  form?: Forms;
  transmission?: Transmissions;
  engine?: Engines;
}

export interface GetCampersByFiltersResponse {
  forms: Forms[];
  transmissions: Transmissions[];
  engines: Engines[];
}

export const getCampers = async (
  filters?: FiltersParams,
  perPage = 4,
  page = 1,
): Promise<GetCampersResponse> => {
  try {
    const { data } = await API.get<GetCampersResponse>("/campers", {
      params: {
        perPage,
        page,
        ...filters,
      },
    });
    return data;
  } catch {
    throw new Error("Failed to fetch campers");
  }
};

export const getCamperById = async (id: string): Promise<Camper> => {
  try {
    const { data } = await API.get<Camper>(`/campers/${id}`);
    return data;
  } catch {
    throw new Error("Failed to fetch camper by ID");
  }
};

export const getCampersFilters =
  async (): Promise<GetCampersByFiltersResponse> => {
    try {
      const { data } =
        await API.get<GetCampersByFiltersResponse>("/campers/filters");
      return data;
    } catch {
      throw new Error("Failed to fetch campers by filters");
    }
  };

export const getReviewsByCamperId = async (id: string): Promise<Review[]> => {
  try {
    const { data } = await API.get<Review[]>(`/campers/${id}/reviews`);
    return data;
  } catch {
    throw new Error("Failed to fetch reviews by camper ID");
  }
};

export const postBooking = async (
  id: string,
  bookingData: BookingPostData,
): Promise<string> => {
  try {
    const { data } = await API.post<{ message: string }>(
      `/campers/${id}/booking-requests`,
      bookingData,
    );
    return data.message;
  } catch {
    throw new Error("Failed to post booking");
  }
};
