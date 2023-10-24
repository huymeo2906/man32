import { useCallback } from "react";
import styles from "./DashboardManagerReport.module.css";

const DashboardManagerReport = () => {
  const onFrameContainer60Click = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  return (
    <div className={styles.dashboardManagerReport}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.flow1Parent}>
            <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
            <div className={styles.avt}>
              <div className={styles.userpic} />
              <div className={styles.state} />
              <div className={styles.label}>KA</div>
            </div>
            <div className={styles.overviewParent}>
              <div className={styles.overview}>Overview</div>
              <div className={styles.employees}>Employees</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.memberParent}>
              <div className={styles.member}>
                <div className={styles.avt1}>
                  <div className={styles.userpic1} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>KA</div>
                </div>
                <div className={styles.avt2}>
                  <div className={styles.userpic2} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>NH</div>
                </div>
                <div className={styles.avt3}>
                  <div className={styles.userpic3} />
                  <div className={styles.state1} />
                  <div className={styles.label1}>HN</div>
                </div>
                <div className={styles.avt4}>
                  <img
                    className={styles.ovalCopy3}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.wrapper}>
                    <div className={styles.div}>+3</div>
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.usearchParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/usearch.svg"
                  />
                 <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                 />
                </div>
                <img
                  className={styles.uangleDownIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
            </div>
            <div className={styles.uplusWrapper}>
              <img className={styles.usearchIcon} alt="" src="/uplus.svg" />
            </div>
            <div className={styles.memberParent}>
              <div className={styles.component2}>
                <div className={styles.ucommentDotsWrapper}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/ucommentdots.svg"
                  />
                </div>
                <div className={styles.component2Child} />
              </div>
              <div className={styles.component2}>
                <div className={styles.ucommentDotsWrapper}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/unotifiacation.svg"
                  />
                </div>
                <div className={styles.component2Child} />
              </div>
              <div className={styles.unsplashfgUd73uZmWrapper}>
                <img
                  className={styles.unsplashfgUd73uZmIcon}
                  alt=""
                  src="/unsplashfg-ud73u-zm@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.filterParent}>
            <div className={styles.filter}>
              <div className={styles.ufilterParent}>
                <img className={styles.ufilterIcon} alt="" src="/ufilter.svg" />
                <div className={styles.bLc}>Bộ lọc</div>
              </div>
              <img
                className={styles.usearchIcon}
                alt=""
                src="/uangleright.svg"
              />
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.filter1}>
                <div className={styles.ufilterParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/ulayergroup.svg"
                  />
                  <div className={styles.spXpTheoParent}>
                    <div className={styles.spXpTheo}>Hiển thị theo</div>
                    <div className={styles.employees}>Phòng phần mềm</div>
                  </div>
                </div>
                <img
                  className={styles.usearchIcon}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.filter1}>
                <div className={styles.ufilterParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/ucheckcircle.svg"
                  />
                  <div className={styles.spXpTheoParent}>
                    <div className={styles.spXpTheo}>Trạng thái</div>
                    <div className={styles.employees}>{`Tất cả `}</div>
                  </div>
                </div>
                <img
                  className={styles.usearchIcon}
                  alt=""
                  src="/uangledown.svg"
                />
              </div>
              <div className={styles.filter1}>
                <div className={styles.ufilterParent}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/ucreatedashboard.svg"
                  />
                  <div className={styles.spXpTheoParent}>
                    <div className={styles.spXpTheo}>Hiển thị</div>
                    <div className={styles.employees}>Dạng danh sách</div>
                  </div>
                </div>
                <img
                  className={styles.usearchIcon}
                  alt=""
                  src="/uangledown1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.instanceParent}>
                <div className={styles.hmNayParent}>
                  <div className={styles.hmNay}>Pho</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.parent}>
                      <div className={styles.div1}>12</div>
                      <div className={styles.vicCnLmWrapper}>
                        <div className={styles.bLc}>Dự án</div>
                      </div>
                    </div>
                    <div className={styles.lineParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameParent1}>
                        <div className={styles.noteHorizontalParent}>
                          <div className={styles.ufilterParent}>
                            <div className={styles.noteHorizontalChild} />
                            <div className={styles.frameParent2}>
                              <div className={styles.container}>
                                <div className={styles.thiGian}>05</div>
                              </div>
                              <div className={styles.miCGiao}>Dự án mới</div>
                            </div>
                          </div>
                          <div className={styles.ufilterParent}>
                            <div className={styles.noteHorizontalItem} />
                            <div className={styles.frameParent2}>
                              <div className={styles.container}>
                                <div className={styles.thiGian}>02</div>
                              </div>
                              <div className={styles.miCGiao}>
                                Đang thực hiện
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.noteHorizontal2}>
                          <div className={styles.noteHorizontalInner} />
                          <div className={styles.frameParent2}>
                            <div className={styles.container}>
                              <div className={styles.thiGian}>05</div>
                            </div>
                            <div className={styles.miCGiao}>
                              Quá thời gian kế hoạch
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.hmNayGroup}>
                  <div className={styles.hmNay}>Sắp hoàn thành</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.parent}>
                      <div className={styles.div1}>06</div>
                      <div className={styles.vicCnLmWrapper}>
                        <div className={styles.bLc}>Dự án</div>
                      </div>
                    </div>
                    <div className={styles.lineParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameParent1}>
                        <div className={styles.noteHorizontalGroup}>
                          <div className={styles.ufilterParent}>
                            <div className={styles.ellipseDiv} />
                            <div className={styles.frameParent2}>
                              <div className={styles.container}>
                                <div className={styles.thiGian}>02</div>
                              </div>
                              <div className={styles.miCGiao}>Review</div>
                            </div>
                          </div>
                          <div className={styles.noteHorizontal4}>
                            <div className={styles.ellipseDiv} />
                            <div className={styles.frameParent2}>
                              <div className={styles.container}>
                                <div className={styles.thiGian}>02</div>
                              </div>
                              <div className={styles.miCGiao}>Sắp hết hạn</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.noteHorizontal2}>
                          <div className={styles.noteHorizontalChild2} />
                          <div className={styles.frameParent2}>
                            <div className={styles.container}>
                              <div className={styles.thiGian}>04</div>
                            </div>
                            <div className={styles.miCGiao}>Chờ nghiệm thu</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.frameParent10}
                  onClick={onFrameContainer60Click}
                >
                  <div className={styles.chart1Wrapper}>
                    <div className={styles.chart1}>
                      <div className={styles.chart1Child} />
                      <div className={styles.chart1Item} />
                      <div className={styles.chart1Inner} />
                      <div className={styles.chart1Child1} />
                      <div className={styles.chart1Child2} />
                      <div className={styles.chart1Child3} />
                      <div className={styles.chart1Child4} />
                      <div className={styles.frameParent11}>
                        <div className={styles.wrapper5}>
                          <b className={styles.b}>150</b>
                        </div>
                        <div className={styles.thng22022}>Tháng 2/2022</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.noteHorizontalContainer}>
                    <div className={styles.noteHorizontal2}>
                      <div className={styles.noteHorizontalChild} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper6}>
                          <div className={styles.thiGian}>21.39%</div>
                        </div>
                        <div className={styles.miCGiao}>Chưa thực hiện</div>
                      </div>
                    </div>
                    <div className={styles.noteHorizontal2}>
                      <div className={styles.noteHorizontalItem} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper6}>
                          <div className={styles.thiGian}>21.83%</div>
                        </div>
                        <div className={styles.miCGiao}>Đang thực hiện</div>
                      </div>
                    </div>
                    <div className={styles.noteHorizontal2}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper6}>
                          <div className={styles.thiGian}>08.31%</div>
                        </div>
                        <div className={styles.miCGiao}>Review</div>
                      </div>
                    </div>
                    <div className={styles.noteHorizontal2}>
                      <div className={styles.noteHorizontalChild2} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper6}>
                          <div className={styles.thiGian}>29.59%</div>
                        </div>
                        <div className={styles.miCGiao}>Nghiệm thu</div>
                      </div>
                    </div>
                    <div className={styles.noteHorizontal2}>
                      <div className={styles.noteHorizontalInner} />
                      <div className={styles.frameParent2}>
                        <div className={styles.wrapper6}>
                          <div className={styles.thiGian}>17.26%</div>
                        </div>
                        <div className={styles.miCGiao}>Quá thời gian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header1}>
          <div className={styles.downParent}>
            <img className={styles.downIcon} alt="" src="/oval-copy-3.svg" />
            <div className={styles.ufilterParent}>
              <div className={styles.text}>Hôm nay</div>
              <div className={styles.number}>
                <div className={styles.thiGian}>05</div>
              </div>
              <div className={styles.statistical1}>
                <img
                  className={styles.uclockIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.tasknameWrapper}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
              <div className={styles.statistical1}>
                <img
                  className={styles.uclockIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.tasknameWrapper}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
              <div className={styles.statistical1}>
                <img
                  className={styles.uclockIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.tasknameWrapper}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuMini}>
          <div className={styles.frameParent17}>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/uangledoubleright.svg"
              />
            </div>
            <div className={styles.iconButtonParent}>
              <div
                className={styles.iconButton}
                onClick={onIconButtonContainerClick}
              >
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uhomealt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ulistul.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usuitcase.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ufilemedicalalt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usitemap.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uusersalt.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.uangleDoubleRightWrapper}>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/usetting.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameInner} alt="" src="/rectangle-1.svg" />
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.trangChParent}>
              <div className={styles.overview}>Trang chủ</div>
              <div className={styles.frameParent18}>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ucreatedashboard.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay2}>Dashboard</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                  <div className={styles.frameParent19}>
                    <div className={styles.frameParent20}>
                      <div className={styles.downGroup}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.thiGianWrapper}>
                          <div className={styles.thiGian}>Thời gian</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Hôm nay</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter1}>
                            <div className={styles.ufilterParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.bLc}>Tuần này</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                            <img
                              className={styles.uclockIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Tháng này</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.tab}>
                            <img
                              className={styles.uclockIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                            <div className={styles.input1}>
                              <div className={styles.hmNayWrapper}>
                                <div className={styles.label4}>Tùy chọn</div>
                                <div className={styles.pointer} />
                              </div>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <img
                                className={styles.outlineClose}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent20}>
                      <div className={styles.downGroup}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.thiGianWrapper}>
                          <div className={styles.thiGian}>Hiển thị theo</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.menuFilterGroup}>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Công việc</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter4}>
                            <div className={styles.ufilterParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.bLc}>Dự án</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                            <img
                              className={styles.uclockIcon}
                              alt=""
                              src="/oval-copy-3.svg"
                            />
                          </div>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Milestones</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Resource</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent20}>
                      <div className={styles.downGroup}>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.thiGianWrapper}>
                          <div className={styles.thiGian}>Phòng ban</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.menuFilterGroup}>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>
                                Phòng phần mềm
                              </div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Phòng kế toán</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter3}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.uclockIcon}
                                alt=""
                                src="/oval-copy-3.svg"
                              />
                              <div className={styles.search}>Marketing</div>
                            </div>
                            <div className={styles.wrapper11}>
                              <div className={styles.thiGian}>06</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/ulistuialt.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay2}>Việc của tôi</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon1}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu2}>
                  <img
                    className={styles.usearchIcon}
                    alt=""
                    src="/uchartline.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay2}>Báo cáo</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon1}
                    alt=""
                    src="/uangleright2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardManagerReport;
