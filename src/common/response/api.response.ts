import { Nullable } from "../constant/general.constant";

export class ApiResponse<TData> {
    public readonly success: boolean;
    public readonly message: string;

    public readonly data: Nullable<TData>;

    public readonly error: Nullable<string>;

    private constructor(
        success: boolean,
        message: string,
        data?: TData,
        error?: string,
    ) {
        this.success = success,
        this.message = message,

        this.data = data || null || undefined;

        this.error = error || undefined;
    }

    public static success<TData>(
        success?: boolean,
        message?: string,
        data?: TData,
    ): ApiResponse<TData> {
        const resultSuccess: boolean = success;
        const resultMessage: string = message;
        return new ApiResponse(resultSuccess, resultMessage, data);
    }

    public static error<TData>(
        success?: boolean,
        message?: string,
        data?: TData,
    ): ApiResponse<TData> {
      const resultSuccess: boolean = success;
      const resultMessage: string = message;
      return new ApiResponse(resultSuccess, resultMessage, data);
    }
}
