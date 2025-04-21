import requests
from datetime import datetime
import time

import hashlib
import json

def generate_sign(data):
    sorted_keys = sorted(data.keys())
    query_string = '&'.join(f"{key}={json.dumps(data[key]) if isinstance(data[key], (dict, list)) else data[key]}" for key in sorted_keys)

    fixed_string = "Uiv#87#SPan.ECsp"
    sign_string = query_string + fixed_string
    
    md5_hash = hashlib.md5(sign_string.encode('utf-8')).hexdigest()
    
    result = {
        'sign': md5_hash,
        **data
    }
    
    return result

def login_fid(headers, fid):
    timestamp_ms = int(datetime.now().timestamp() * 1000)
    data = {
        "fid": fid,
        "time": str(timestamp_ms),
    }

    data = generate_sign(data)
    # print(f"[POST]\n{data}")

    url_login = "https://wjdr-giftcode-api.campfiregames.cn/api/player"

    response = requests.post(
        url_login,
        headers=headers,
        data=data
    )
    # print(response.headers)
    response_data = response.json() if response.status_code == 200 else { "msg": "" }
    # print(response_data)
    return response_data

all_fid = {
    "梦浮生": "74907513",
    "大梦谁先觉": "398918200",
    "平生我自知": "400376643",
    "窗外日迟迟": "400474481",
    "草堂春睡足": "416712998",
    "托尼带水": "61685237",
    "抖音185_1": "470374425",
    "抖音185_2": "477066852",
    "[327]亚历山大": "77512758",
    "[327]祈愿婷": "73023472",
    "[122]曦 城": "444513087",
}
all_cdk = [
    # 通用
    # "WJDR111", "WJDR222", "WJDR333", "WJDR666",
    # "WJDR2025", "WJDR168", "WJDR899", "WJDR988",
    # "FH666", "FH777", "FH888", "FH6666", "FH7777", "FH8888",
    # "WZY666", "WZY777", "WZY888",
    # "TILI520", "WJDRtaptap", "666WJDR2024", "WJDRTB6666", "WOAIWJDR",

    # 节日
    "JINLI520",
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
}
url_gift = "https://wjdr-giftcode-api.campfiregames.cn/api/gift_code"

retry_limit = 5
error_login = 0
totol_error_gift = 0
totol_success_gift = 0
totol_retry_limit = 0
sleep_time = 2.5
cdk_sleep_time = 1.5
timeout_sleep_time = 15

for player_name, fid in all_fid.items():
    response_data = login_fid(headers, fid)
    if response_data["msg"] != "success":
        error_login += 1
        print("[Error] login response_data: " + str(response_data))
        time.sleep(sleep_time)
    else:
        success_gift = 0
        for cdk in all_cdk:
            for retry in range(retry_limit):
                timestamp_ms = int(datetime.now().timestamp() * 1000)
                data = {
                    "fid": fid,
                    "cdk": cdk,
                    "time": str(timestamp_ms)
                }
                data = generate_sign(data)
                # print("[POST]\n" + data)

                response = requests.post(
                    url_gift,
                    headers=headers,
                    data=data
                )
                try:
                    response_data = response.json()
                except Exception as e:
                    print(f"[Error] status_code {response.status_code}")
                    # print(response.text)
                    if retry < retry_limit - 1:
                        time.sleep(timeout_sleep_time * (retry + 1))
                        response_data = login_fid(headers, fid)
                        if response_data["msg"] != "success":
                            print(f"[Error] Login {player_name} {fid} {response_data}")
                        time.sleep(sleep_time)
                    continue
                # print(response_data)
                if response_data["msg"] == "RECEIVED." or response_data["msg"] == "USED.":
                    totol_error_gift += 1
                    print(f"Already redeemed {cdk}")
                    # print("gift response_data: " + str(response_data))
                    break
                elif response_data["msg"] == "TIME ERROR.":
                    totol_error_gift += 1
                    print(f"CdKey {cdk} is expired")
                    # print("gift response_data: " + str(response_data))
                    break
                elif response_data["msg"] == "STOVE_LV ERROR.":
                    totol_error_gift += 1
                    print(f"Player {player_name}:{fid} level not up to standard")
                    # print("gift response_data: " + str(response_data))
                    break
                elif response_data["msg"] == "SUCCESS":
                    success_gift += 1
                    print(f"[Success] {cdk}")
                    break
                else:
                    print(f"{response_data}")
                    if retry < retry_limit - 1:
                        time.sleep(5 * (retry + 1))
                        response_data = login_fid(headers, fid)
                        if response_data["msg"] != "success":
                            print(f"[Error] Login {player_name} {fid} {response_data}")
                        time.sleep(sleep_time)
            else:
                print(f"[Error] Retry limit {player_name} {fid} cdk={cdk}")
                totol_retry_limit += 1
            time.sleep(cdk_sleep_time)
        time.sleep(sleep_time)

        totol_success_gift += success_gift
        print(f"=> {player_name} {fid} success_gift={success_gift}")

print(f"error_login = {error_login} totol_error_gift = {totol_error_gift} totol_success_gift = {totol_success_gift}")
if totol_retry_limit > 0:
    print(f"[Error] totol_retry_limit = {totol_retry_limit}")