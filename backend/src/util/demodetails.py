def details(query):
    if 'highest performing ads' in query:
        model_response = '''
        The highest performing ad for rugs USA is titled 'Video_Outdoor'.

        | ad_name | impressions | ctr | cpc |
        | --- | --- | --- | --- |
        | Video_Outdoor - IG Organic Reel_Seasonal_UGC_Dynamic_Outdoor_Designer_Easy Search_Outdoor_Single_Home Page_Meta | 178522 | 2.2% | $0.86 |
        | Video_Living Room - Organic IG Reel_Evergreen_UGC_Dynamic_Site Search_General Homeowner_Best Rug_Living Room_Single_Home Page_IG | 209932 | 1.7% | $1.08 |
        | Video_Organic IG Top Performer 1_Evergreen_UGC_Dynamic_Best Sellers_General Homeowner_Variety_Multi_Single_Home Page_IG | 259123 | 1.1% | $1.63 |
        | Video_Washable Reel Aesthetic Luxury_Evergreen_Product Shot_Shop Now_Washable_General Homeowner_Functionality_Washable_Single_Collection Page_IG | 67231 | 1.0% | $1.85 |
        | Video_Organic IG Top Performer 2_Evergreen_UGC_Dynamic_Best Sellers_General Homeowner_Variety_Multi_Single_Home Page_IG | 100106 | 0.8% | $2.26 |
        '''
    elif 'attributes' in query:
        model_response = '''
        The attributes of the 'Video_Outdoor' ad with the highest confidence are Garden, Artwork, and Table. 

        - Garden (90% confidence)
        - Artwork (72% confidence)
        - Table (39% confidence)

        These attributes are generated by an artificial intelligence model that analyzes the visual elements of the ad, such as colors, patterns, and objects, and identifies the most prominent ones with a certain level of confidence.        
        '''
    elif 'lowest performing ads' in query:
        model_response = '''
        The lowest performing ad for rugs USA is 'Video_Memorial'.

        | ad_name                                                             | impressions | ctr  | cpc  |
        |---------------------------------------------------------------------|-------------|------|------|
        | Video_Memorial Day UGC_Promotion_UGC_Shop Now_Outdoor_General Homeowner_Functionality_Outdoor_Single_Home Page_Meta | 28208      | 0.41% | $5.39 |
        | Video_Outdoor Trend Memorial Day_Promotion_Text Graphic & Picture_Shop Now_Outdoor_General Homeowner_Variety_Outdoor_Single_Home Page_Meta | 31112      | 0.41% | $4.30 |
        | Video_Washable Reel_Evergreen_Group Product Shot_Shop Now_Washable_General Homeowner_Functionality_Washable_Single_Collection Page_IG | 163264     | 0.75% | $3.07 |
        | Video_Spring to Your Front Porch Outdoor Rug_Evergreen_Product Shot_NA_Outdoor_General Homeowner_Newness_Outdoor_Single_Product Page_Meta | 47635      | 0.78% | $2.65 |
        | Video_Organic IG Top Performer 2_Evergreen_UGC_Dynamic_Best Sellers_General Homeowner_Variety_Multi_Single_Home Page_IG | 100106     | 0.85% | $2.26 |

        These ads have the lowest impressions and click-through rates (CTR) and higher costs per click (CPC), suggesting they are the weakest performers. Therefore, it is recommended to pause these ads.
        '''
    elif 'Q2 goals' in query:
        model_response = '''
        Based on the performance report for the quarter, here are some objectives for the advertising company for the next quarter:

        1. Increase brand awareness by 8% among the target audience through social media ads and influencer partnerships by the end of the quarter.
        2. Drive website traffic by 10% through Google search campaigns and display ads by the end of the quarter.
        3. Generate 500 leads through email marketing campaigns and paid search ads by the end of the quarter.
        4. Increase sales revenue by 10% through social media and email campaigns which provide exclusive offers by the end of the quarter.
        5. Improve social media engagement by 30% through a combination of influencer collaborations, shareable content, and social media contests by the end of the quarter.
        6. Enhance brand reputation by garnering 500 positive reviews on various platforms including Facebook, Google reviews, etc. by the end of the quarter.
        7. Expand target markets by penetrating new retail markets with company products, increasing B2B interactions by 20%, and increasing direct to customer marketing by 20% by the end of the quarter.
        8. Reduce customer churn rate by 10% by the end of the quarter through personalized email campaigns, reward programs, and surveys to obtain feedback.
        9. Increase the company's market share by 15% by featuring USP on social media and paid search ads by the end of the quarter.
        10. Establish the company as a thought leader in the industry by producing 5 educational resources including webinars, articles, and infographics, which must be shared across platforms and generate 1K downloads/views by the end of the quarter.
        '''
    elif 'Save' in query:
        model_response = '''   
        The objectives for the next quarter have been saved to your notes as "Q2 objectives". Is there anything else I can do for you?
        '''
    else:
        model_response=''
    
    print(type(model_response))
    return str(model_response)