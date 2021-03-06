class RatingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :validate_login, only: [:metrics]
  before_action :set_rating, only: [:show, :edit, :update, :destroy]

  # GET /ratings
  # GET /ratings.json
  def index
    @ratings = Rating.all
    respond_to do |format|
      format.json { render json: {ratings: @ratings}, status: :ok }
    end
  end

  # GET /ratings/1
  # GET /ratings/1.json
  def show
    respond_to do |format|
      format.json { render json: {rating: @rating}, status: :ok }
    end
  end

  # GET /ratings/new
  def new
    @rating = Rating.new
  end

  # GET /ratings/1/edit
  def edit
  end

  # POST /ratings
  # POST /ratings.json
  def create
    @rating = Rating.new(rating_params)
    if params[:request_rating]
      RequestRating.find(params[:request_rating]).update(status: "true")
    end
    respond_to do |format|
      if @rating.save
        format.json { render json: {rating: @rating}, status: :ok }
      else
        format.html { render :new }
        format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ratings/1
  # PATCH/PUT /ratings/1.json
  def update
    respond_to do |format|
      if @rating.update(rating_params)
        format.html { redirect_to @rating, notice: 'Rating was successfully updated.' }
        format.json { render :show, status: :ok, location: @rating }
      else
        format.html { render :edit }
        format.json { render json: @rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ratings/1
  # DELETE /ratings/1.json
  def destroy
    @rating.destroy
    respond_to do |format|
      format.html { redirect_to ratings_url, notice: 'Rating was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def metrics
    respond_to do |format|
      format.json { render json: {total_number_of_ratings: Rating.count}}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rating
      @rating = Rating.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rating_params
      params.require(:rating).permit(:student_id, :skill_id, :teacher_id, :rating, :review)
    end
end
